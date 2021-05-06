import React from "react";
import { useSpring, animated } from "react-spring";

function NutritionStart() {
    const styles = useSpring({
      from: { color: 'white', fontSize: 0, marginTop: -500},
      to: { color: 'black', fontSize: 36, marginTop:0 },
    })
    // ...
    return (
        <div>
            <animated.h2 style={styles}>Nutrition:</animated.h2>
            <animated.h3 style={styles}>An important Component in your Life</animated.h3>
        </div>

    )
  }

export default NutritionStart;