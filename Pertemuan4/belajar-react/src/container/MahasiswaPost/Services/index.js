import GetApi from "./Get";
import PostApi from "./Post";
import DeleteApi from "./Delete";

const getNewBlog = () => GetApi('mahasiswa?_sort=id&_order=desc');
const postNewBlog = (dataYangDikirim) => PostApi('mahasiswa', dataYangDikirim);
const deleteNewBlog = (dataYangDihapus) => DeleteApi('mahasiswa', dataYangDihapus);

const API ={
    getNewBlog,
    postNewBlog,
    deleteNewBlog
}

export default API;
