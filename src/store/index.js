import {createStore} from 'vuex'

import articles from "@/store/modules/articles";

export default createStore({
    modules: {articles}
})
