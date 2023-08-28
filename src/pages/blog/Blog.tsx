import { Button, NewsCard, BlogCta } from 'components';
import { LATEST_NEWS } from 'data';
import { BirdBackground, BingUser } from 'images';
import BlogStyles from './blog.module.css';

const Blog = () => {
   return (
      <main>
         <section className={BlogStyles.BlogHeader}>
            <p className={BlogStyles.BlogHeaderTitle}>Blog</p>
            <h2 className={BlogStyles.BlogHeaderSub}>Thoughts and Words</h2>
            <div className={BlogStyles.BlogHeaderContent}>
               <img src={BirdBackground} alt="" className={BlogStyles.BlogHeaderContentImage} />
               <div className={BlogStyles.BlogHeaderContentRight}>
                  <div className={BlogStyles.BlogHeaderDateWrapper}>
                     <p className={BlogStyles.BlogHeaderCategory}>Category</p>
                     <p className={BlogStyles.BlogHeaderContentDate}>November 22, 2021</p>
                  </div>
                  <p className={BlogStyles.BlogHeaderContentText}>
                     Pitch termsheet backing validation focus release.
                  </p>
                  <div className={BlogStyles.BlogHeaderAuthorWrapper}>
                     <img src={BingUser} alt="" className={BlogStyles.BlogHeaderAuthorImage} />
                     <p className={BlogStyles.BlogHeaderAuthorName}>Chandler Bing</p>
                  </div>
               </div>
            </div>
         </section>
         <section className={BlogStyles.BlogNewsWrapper}>
            <h2>Latest News</h2>
            <div className={BlogStyles.BlogNewsContent}>
               {LATEST_NEWS.map((news, index) => (
                  <NewsCard news={news} key={index} />
               ))}
            </div>
            <Button className={BlogStyles.cardLoadMore} outline="black">
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
