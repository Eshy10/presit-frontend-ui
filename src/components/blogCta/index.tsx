import Button from 'components/button';
import BlogCtaStyles from './blogCta.module.css';

const BlogCta = () => {
   return (
      <section className={BlogCtaStyles.BlogCta}>
         <h2 className={BlogCtaStyles.BlogCtaTitle}>
            An enterprise template to ramp up your company website
         </h2>
         <form>
            <div className={BlogCtaStyles.InputWrapper}>
               <label htmlFor="email">
                  <input type="email" id="email" placeholder="Your email address" />
               </label>
               <Button type="button" className="" variant="secondary">
                  Start now
               </Button>
            </div>
         </form>
      </section>
   );
};

export default BlogCta;
