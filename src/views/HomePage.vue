<template>
   <main>
        <!-- Whats New Start -->
    <div class="container mt-4 mt-lg-0 d-flex flex-column align-items-end">
        <div class="col-lg-3 col-12 d-flex align-items-center">
          <input type="text" class="form-control m-2" v-model="searchKey" placeholder="search here" v-on:keyup.enter="search()">
          <i role="button" class="fa fa-search m-2 fs-5 text-muted" aria-hidden="true" @click="search()"></i>
        </div>
        <div class="col-lg-3 col-12 d-flex align-items-center ps-2">
          <div v-if="showSearchKey" role="button" @click="clearSearch()" class="text-start p-1 border border-1 rounded">
            <span>{{ searchKey }}</span>
            <i class="fa-solid fa-xmark ms-2 p-1"></i>
          </div>
        </div>

    </div>
        <section class="whats-news-area pt-50 pb-20">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row d-flex justify-content-between">
                            <div class="col-lg-3 col-md-3">
                                <div class="section-tittle mb-30">
                                    <h3>Whats New</h3>
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-9">
                                <div class="properties__button">
                                    <!--Nav Button  -->
                                    <nav>
                          <div  class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a @click="categoryFilter('All')" class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="details.htmlnav-home" role="tab" aria-controls="nav-home" aria-selected="true">All</a>
                            <a
                              v-for="(cat,index) in category" :key="index" 
                              class="nav-item nav-link"
                              id="nav-profile-tab"
                              data-toggle="tab"
                              href="details.htmlnav-profile"
                              role="tab"
                              aria-controls="nav-profile"
                              aria-selected="false" @click="categoryFilter(cat.name)"
                              >{{cat.name}}</a>
                            
                      </div>
                    </nav>
                    <!--End Nav Button  -->
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <!-- Nav Card -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-12 text-center mb-5" v-if="posts.length==0">
                              <div class="border border-1 p-3">
                                There is no news to show  
                              </div>
                          </div>
                          <div class="col-lg-4 col-md-6" v-for="(post,index) in posts" :key="index">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img v-if="post.image" :src="'http://192.168.100.42:8000/postImage/'+post.image"
                                  alt=""
                                />
                                <img v-else src="http://192.168.100.42:8000/default/default.png"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">{{ post.category }}</span>
                                <h4>
                                  <a href="details.html"
                                    >{{ post.title }}</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Card two -->
                    <div
                      class="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Card three -->
                    <div
                      class="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card fure -->
                    <div
                      class="tab-pane fade"
                      id="nav-last"
                      role="tabpanel"
                      aria-labelledby="nav-last-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card Five -->
                    <div
                      class="tab-pane fade"
                      id="nav-nav-Sport"
                      role="tabpanel"
                      aria-labelledby="nav-Sports"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- card Six -->
                    <div
                      class="tab-pane fade"
                      id="nav-techno"
                      role="tabpanel"
                      aria-labelledby="nav-technology"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews1.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews2.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews3.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6">
                            <div class="single-what-news mb-100">
                              <div class="what-img">
                                <img
                                  src="assets/img/news/whatNews4.jpg"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">Night party</span>
                                <h4>
                                  <a href="details.html"
                                    >Welcome To The Best Model Winner Contest</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>
            </div>
           
        </section>
        <!-- Whats New End -->

        <!--Start pagination -->
        <div class="pagination-area pb-45 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="single-wrap d-flex justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span
                      ></a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link" href="details.html">01</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">02</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html">03</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="details.html"><span class="flaticon-arrow right-arrow"></span
                      ></a>
                                            </li>
                                            </ul>
                                    </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End pagination  -->
    </main>
</template>
<script src="../js/HomePage.js"></script>