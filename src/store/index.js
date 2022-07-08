import {createStore} from 'vuex'

import articles from "@/store/modules/articles";
import auth from "@/store/modules/auth";

export default createStore({
    modules: {
        articles,
        auth
    }
})
