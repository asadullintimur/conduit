import {createStore} from 'vuex'

import articles from "@/store/modules/articles";
import tags from "@/store/modules/tags";
import register from "@/store/modules/auth/register";


export default createStore({
    modules: {
        articles,
        tags,
        register
    }
})
