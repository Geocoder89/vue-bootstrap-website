<template>
    <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div class="row">
          
            <div class="col-md-4 col-sm-6 portfolio-item" v-for="(item, index) in portfolioJSON" :key="index">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="">
                </a>
                <div class="portfolio-caption">
                    <h4>{{ item.caption }}</h4>
                    <p class="text-muted">{{ item.title }}</p>
                </div>
            </div>
        </div>
      </div>
    </section>    

</template>

<script>
export default {
   data() {
       return {
    portfolioJSON:[
        {
            img:'/new/random/img-jpg',
            
            caption:'Explore',

            title: 'Web Development'
        },

        {
            img:'/new/random/img-jpg',
            
            caption:'Finsh',

            title: 'Mobile Development'
        },
    {
            img:'/new/random/img-jpg',
            
            caption:'Lines',

            title: 'Search Engine Optimization'
        },
    
    {
            img:'/new/random/img-jpg',
            
            caption:'Window',

            title: 'Home of Opportunity'
        },
    
    {
            img:'/new/random/img-jpg',
            
            caption:'Taste',

            title: 'The Better Side of Life'
        },
    {
            img:'/new/random/img-jpg',
            
            caption:'testing',

            title: 'I just had to test Vue again'
        },
    
    ]
       }
   }, 
}
</script>

<style lang="css">
    
</style>