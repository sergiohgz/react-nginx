import css from './Page2.module.css';

const Page2 = () => {
    return (
        <>
            <h3>This is page 2</h3>
            <img
                src="/static/logo.svg"
                alt="Logo"
                className={css['App-logo']}
            />
        </>
    );
};

export default Page2;
