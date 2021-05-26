import React from "react";
import { useSpring, animated } from "react-spring";

function NutritionStart() {
    const styles = useSpring({
      from: { color: 'white', fontSize: 0, marginTop: -500},
      to: { color: '#3214DA', fontSize: 48, marginTop:0, paddingBottom:15 },
    })

    const morestyle = useSpring({
      from: { color: 'white', fontSize: 0},
      to: { color: 'white', fontSize: 32, paddingBottom: 15},
    })
    // ...
    return (
        <div>
            <animated.h2 style={styles}>Nutrition:</animated.h2>
            <animated.h3 style={morestyle}>An Important Part of your Life, 70 percent of progress happens in the kitchen!</animated.h3>
            <animated.h4 style={morestyle}>Search the databases for food component details</animated.h4>
        </div>

    )
  }

export default NutritionStart;