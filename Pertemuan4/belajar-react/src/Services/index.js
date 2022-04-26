import GetApi from "./Get";
import PostApi from "./Post";
import DeleteApi from "./Delete";

const getNewBlog = () => GetApi('posts?_sort=id&_order=desc');
const postNewBlog = (dataYangDikirim) => PostApi('posts', dataYangDikirim);
const deleteNewBlog = (dataYangDihapus) => DeleteApi('posts', dataYangDihapus);

const API ={
    getNewBlog,
    postNewBlog,
    deleteNewBlog
}

export default API;
