import axios from "axios";
export default{
    name:"HomePage",
    data(){
        return{
            category:[],
            Allposts:[],
            posts:[],
            searchKey:'',
            showSearchKey:false,
            currentCategory:'All'
        };
    },
    methods:{
        getAllCategory(){
            axios.get("http://192.168.100.42:8000/api/category").then((response)=>{
                        this.category=response.data.category;
            })
        },
        getAllPosts(){
            this.showSearchKey=false;
            if(this.currentCategory!='All'){
              return  this.categoryFilter(this.currentCategory);
            }
            axios.get("http://192.168.100.42:8000/api/posts").then((response)=>{
                this.posts=response.data.post;
                this.Allposts=response.data.post;
            })
        },
        search(){
            if(!this.searchKey.trim()==''){
                this.showSearchKey=true;
                let data= {
                    searchKey: this.searchKey,
                }
                if (this.currentCategory!="All") {
                    data.category=this.currentCategory;
                }
                axios({
                    method: 'post',
                    url: 'http://192.168.100.42:8000/api/posts/search',
                    data:data,
                  }).then((response)=>{
                        this.posts=response.data.post;
                  });
            }else{
                this.showSearchKey=false;
            }

        },
        clearSearch(){
            this.searchKey="";
            this.getAllPosts();
        },
        categoryFilter(category){
            if(category=='All'){
               this.currentCategory='All';
               return this.posts=this.Allposts;
            }
            let filter=this.Allposts.filter((post)=>{
                
                return post.category==category
            });
            this.posts=filter;
            this.currentCategory=category;
        }
    },
    mounted(){
        this.getAllCategory();
        this.getAllPosts();
        document.querySelector('#preload').style.display='none';
    }


}