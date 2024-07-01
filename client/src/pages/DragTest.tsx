import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function DragTest() {
    const constraintsRef = useRef(null);

    const x1 = useMotionValue(0);
    const y1 = useMotionValue(0);

    const x2 = useMotionValue(0);
    const y2 = useMotionValue(0);

    const [lineProps, setLineProps] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

    useEffect(() => {
        const updateLineProps = () => {
            setLineProps({
                x1: x1.get(),
                y1: y1.get(),
                x2: x2.get(),
                y2: y2.get(),
            });
        };

        const unsubscribeX1 = x1.onChange(updateLineProps);
        const unsubscribeY1 = y1.onChange(updateLineProps);
        const unsubscribeX2 = x2.onChange(updateLineProps);
        const unsubscribeY2 = y2.onChange(updateLineProps);

        updateLineProps();

        return () => {
            unsubscribeX1();
            unsubscribeY1();
            unsubscribeX2();
            unsubscribeY2();
        };
    }, [x1, y1, x2, y2]);

    return (
        <motion.div
            className="w-[800px] h-[800px] flex rounded-md relative bg-opacity-30"
            ref={constraintsRef}
        >
            <motion.div
                className="w-[150px] h-[150px] bg-white rounded-full m-2"
                drag
                dragConstraints={constraintsRef}
                style={{ x: x1, y: y1 }}
            />
            <motion.svg
                viewBox={`0 0 800 800`}
                className="absolute top-0 left-0 w-full h-full -z-10"
            >
                <motion.line
                    x1={lineProps.x1 + 80}
                    y1={lineProps.y1 + 75}
                    x2={lineProps.x2 + 240}
                    y2={lineProps.y2 + 80}
                    stroke="#00cc88"
                    strokeWidth="5"
                />
            </motion.svg>
            <motion.div
                className="w-[150px] h-[150px] bg-orange-400 rounded-full m-2"
                drag
                dragConstraints={constraintsRef}
                style={{ x: x2, y: y2 }}
            />
        </motion.div>
    );
}
