import {createStore} from 'vuex'

import articles from "@/store/modules/articles";
import tags from "@/store/modules/tags";
import auth from "@/store/modules/auth";
import user from "@/store/modules/user";
import article from "@/store/modules/article";



export default createStore({
    modules: {
        articles,
        tags,
        auth,
        user,
        article
    }
})
