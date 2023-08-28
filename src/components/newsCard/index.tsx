import NewsCardStyles from './newsCard.module.css';

interface NewsCardProps {
   news: {
      newsAvatarUrl: string;
      category: string;
      date: string;
      newsContent: string;
      authorAvatarUrl: string;
      authorName: string;
      news_url: string;
      cta_action: () => void;
   };
}

const NewsCard = ({ news }: NewsCardProps) => {
   return (
      <div className={NewsCardStyles.cardWrapper}>
         <img src={news.newsAvatarUrl} alt="news picture" className={NewsCardStyles.cardNewsUrl} />
         <div className={NewsCardStyles.cardCategoryWrapper}>
            <p className={NewsCardStyles.cardCategory}>{news.category}</p>
            <p className={NewsCardStyles.cardCategoryDate}>{news.date}</p>
         </div>
         <p className={NewsCardStyles.cardContent}>{news.newsContent}</p>
         <div className={NewsCardStyles.cardAuthor}>
            <img
               src={news.authorAvatarUrl}
               alt="author url"
               className={NewsCardStyles.cardAutorUrl}
            />
            <p>{news.authorName}</p>
         </div>
      </div>
   );
};

export default NewsCard;
