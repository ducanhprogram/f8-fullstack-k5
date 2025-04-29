import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.scss";
import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";
function Accordion({
    defaultIndex = 0,
    children,
    onChange,
    collapseOthers = true,
    className,
}) {
    const items = React.Children.toArray(children);
    const [openIndices, setOpenIndices] = useState([defaultIndex]); // [0]
    const [focusedIndex, setFocusedIndex] = useState(defaultIndex); // 0

    const prevOpenIndices = useRef(openIndices); //[0]

    useEffect(() => {
        if (prevOpenIndices.current.join() !== openIndices.join()) {
            onChange(openIndices[0] !== undefined ? openIndices[0] : -1);
        }
        prevOpenIndices.current = openIndices;
    }, [openIndices, onChange]);

    //index từ onToggle
    const handleToggle = (index) => {
        setOpenIndices((prev) => {
            // console.log(prev);
            if (prev.includes(index)) {
                return collapseOthers
                    ? []
                    : prev.filter((i) => {
                          return i !== index;
                      });
            }
            return collapseOthers ? [index] : [...prev, index];
        });
    };

    const handleKeyDown = (e) => {
        const lastIndex = items.length - 1;
        let newIndex = focusedIndex;

        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            newIndex = focusedIndex === lastIndex ? 0 : focusedIndex + 1;
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            newIndex = focusedIndex === 0 ? lastIndex : focusedIndex - 1;
        }

        setFocusedIndex(newIndex);
    };

    return (
        <div className={clsx(styles.accordion_Container, className)}>
            {items.map((child, index) => {
                return (
                    <AccordionItem
                        key={index}
                        index={index}
                        header={child.props.header} // Accordion 1
                        // eslint-disable-next-line react/no-children-prop
                        children={child.props.children} //Nội dung
                        className={child.props.className}
                        isOpen={openIndices.includes(index)}
                        onToggle={handleToggle}
                        onKeyFocus={handleKeyDown}
                        focusedIndex={focusedIndex}
                    />
                );
            })}
        </div>
    );
}

Accordion.propTypes = {
    defaultIndex: PropTypes.number,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
    collapseOthers: PropTypes.bool,
    className: PropTypes.string,
};

export default Accordion;
