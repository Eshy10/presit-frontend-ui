import Navbar from 'components/navbar';
import Footer from 'components/footer';
import pageStyles from './page.module.css';

interface PageProps {
   children: React.ReactNode | React.ReactNode[];
}

const Page = ({ children }: PageProps) => {
   return (
      <section className={pageStyles.pageWrapper}>
         <Navbar />
         <div className={pageStyles.page}>{children}</div>
         <Footer />
      </section>
   );
};

export default Page;
