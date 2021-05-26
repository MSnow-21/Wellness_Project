import React from "react";
import { useSpring, animated } from "react-spring";

function NutritionStart() {
    const styles = useSpring({
      from: { color: 'black', fontSize: 0, marginTop: -500},
      to: { color: 'white', fontSize: 45, marginTop:0 },
    })

    const morestyle = useSpring({
      from: { color: 'black'},
      to: { color: 'white'},
    })
    // ...
    return (
        <div>
            <animated.h2 style={styles}>Nutrition:</animated.h2>
            <animated.h3 style={morestyle}>An Important Part of your Life</animated.h3>
            <animated.h4 style={morestyle}>Search the databases for food component details</animated.h4>
        </div>

    )
  }

export default NutritionStart;