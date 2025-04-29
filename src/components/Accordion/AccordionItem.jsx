import PropTypes from "prop-types";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import styles from "./Accordion.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function AccordionItem({
    header,
    children,
    className,
    isOpen,
    onToggle,
    onKeyFocus,
    index,
    focusedIndex,
}) {
    const buttonRef = useRef(null);

    useEffect(() => {
        if (focusedIndex === index) {
            buttonRef.current.focus(); // Tự động focus nút
        }
    }, [focusedIndex, index]);

    const handleKeyDown = (e) => {
        console.log(e);
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle(index);
        }
        onKeyFocus(e);
    };

    return (
        <div className={clsx(styles.accordion_Item, className)}>
            <button
                ref={buttonRef}
                className={clsx(styles.accordion_Header)}
                onClick={() => onToggle(index)}
                onKeyDown={handleKeyDown}
                aria-expanded={isOpen}
            >
                {header}
                <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className={styles.headerIcon}
                />
            </button>

            {isOpen && (
                <div className={styles.accordion_Content}>{children}</div>
            )}
        </div>
    );
}

AccordionItem.propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func,
    onKeyFocus: PropTypes.func,
    index: PropTypes.number,
    focusedIndex: PropTypes.number,
};

export default AccordionItem;
