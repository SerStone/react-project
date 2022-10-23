import css from './GenreBadge.module.css'

const GenreBadge = ({badge}) => {

    return (
        <span className={css.badge}>
                {badge}
        </span>
);
};

export {GenreBadge};