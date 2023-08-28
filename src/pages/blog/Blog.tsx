import { Button, NewsCard, BlogCta } from 'components';
import { LATEST_NEWS } from 'data';
import { BirdBackground, BingUser } from 'images';

const Blog = () => {
   return (
      <main>
         <section>
            <p>Blog</p>
            <h2>Thoughts and Words</h2>
            <div>
               <img src={BirdBackground} alt="" />
               <div>
                  <div>
                     <p>Category</p>
                     <p>November 22, 2021</p>
                  </div>
                  <p>Pitch termsheet backing validation focus release.</p>
                  <div>
                     <img src={BingUser} alt="" />
                     <p>Chandler Bing</p>
                  </div>
               </div>
            </div>
         </section>
         <section>
            <h2>Latest News</h2>
            {LATEST_NEWS.map((news, index) => (
               <NewsCard news={news} key={index} />
            ))}
            <Button className="" outline="black">
               Load more
            </Button>
         </section>
         <section>
            <BlogCta />
         </section>
      </main>
   );
};

export default Blog;
