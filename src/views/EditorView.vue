<template>
  <div class="editor-page"
       v-if="article">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">

          <ul class="error-messages">
            <li
                v-for="error in errors"
                :key="error">{{ error }}
            </li>
          </ul>

          <form>
            <fieldset
                :disabled="isRequestPending">
              <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Article Title"
                       v-model="article.title">
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="What's this article about?"
                       v-model="article.description">
              </fieldset>
              <fieldset class="form-group">
                            <textarea class="form-control" rows="8"
                                      placeholder="Write your article (in markdown)"
                                      v-model=article.body></textarea>
              </fieldset>

              <tags-input
                  :tags="tags"
                  @create="createTag"
                  @delete="deleteTag">
              </tags-input>

              <button class="btn btn-lg pull-xs-right btn-primary" type="button"
                      @click.prevent="publish">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import TagsInput from "@/components/TagsInput";
import {mapActions, mapGetters, mapState} from "vuex";
import {normalizeErrors} from "@/services/helpers";

export default {
  name: "EditorView",

  components: {TagsInput},

  props: {
    slug: {
      type: String
    }
  },

  data() {
    return {
      article: null,
      errors: {},
      isRequestPending: false
    }
  },

  computed: {
    ...mapState("article", {
      articleEdit: "item"
    }),

    ...mapGetters("article", ["isUserAuthor"]),

    tags() {
      return this.article.tagList;
    },

    isEditing() {
      return this.slug;
    },

  },

  methods: {
    ...mapActions("article", {
      createArticle: 'create',
      updateArticle: 'update',
      fetchArticle: 'fetch'
    }),

    publish() {
      this.isRequestPending = true;

      let fetchMethod = this.isEditing ?
          this.updateArticle :
          this.createArticle;

      fetchMethod(this.article)
          .finally(() => this.isRequestPending = false)
          .then(({article}) => {
            this.$router.push({
              name: 'article.show',
              params: {
                slug: article.slug
              }
            })
          })
          .catch(({data}) => {
            this.errors = normalizeErrors(data.errors);
          })
    },

    createTag(tag) {
      this.tags.push(tag)
    },

    deleteTag(tag) {
      this.article.tagList = this.tags.filter(fTag => fTag !== tag);
    },

    checkIfAuthor() {
      if (!this.isUserAuthor) {
        this.$router.push({
          name: 'home'
        })
      }
    }
  },

  async created() {
    if (this.isEditing) {
      this.checkIfAuthor()
      await this.fetchArticle(this.slug)

      let {title, description, body, tagList} = this.articleEdit;

      this.article = {
        title,
        description,
        body,
        tagList
      }
    } else {
      this.article = {
        title: "",
        description: "",
        body: "",
        tagList: []
      }
    }


  }
}
</script>

<style scoped>

</style>