import {motion} from "framer-motion";

const animations={
    initial:{opacity:0},
    animate:{opacity:1},
    exit:{opacity:0}
}
const AnimationPage=({childrens})=>{
    return(
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit"
        transition={{duration:1}}
        >
            {childrens}
        </motion.div>

    )
}
export default AnimationPage;