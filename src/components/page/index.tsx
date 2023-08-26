import pageStyles from './page.module.css';

interface PageProps {
   children: React.ReactNode | React.ReactNode[];
}

const Page = ({ children }: PageProps) => {
   return <div className={pageStyles.page}>{children}</div>;
};

export default Page;
