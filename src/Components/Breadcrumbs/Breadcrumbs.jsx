import { useLocation, Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const formatBreadcrumb = (text) => {
        if (!text) return '';
        return text
            .replace(/-/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
    };

    const currentPageTitle = pathnames.length === 0
        ? 'Dashboard'
        : formatBreadcrumb(pathnames[pathnames.length - 1]);

    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs-path">
                <Link to="/">Pages</Link>
                {pathnames.map((name, index) => {
                    const routeTo = '/' + pathnames.slice(0, index + 1).join('/');
                    const isLast = index === pathnames.length - 1;

                    return (
                        <span key={index}>
              {' / '}
                            {isLast ? (
                                <span>{formatBreadcrumb(name)}</span>
                            ) : (
                                <Link to={routeTo}>{formatBreadcrumb(name)}</Link>
                            )}
            </span>
                    );
                })}
            </div>


            <div className="breadcrumbs-title">
                <h2>{currentPageTitle}</h2>
            </div>
        </div>
    );
};

export default Breadcrumbs;
