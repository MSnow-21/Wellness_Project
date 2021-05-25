import React from "react";
import { useSpring, animated } from "react-spring";

function NutritionStart() {
    const styles = useSpring({
<<<<<<< HEAD:client/src/components/NutritionStart/index.js
      from: { color: 'black', fontSize: 0, marginTop: -500},
      to: { color: 'white', fontSize: 45, marginTop:0 },
    })

    const morestyle = useSpring({
      from: { color: 'black'},
      to: { color: 'white'},
=======
      from: { color: 'white', fontSize: 0, marginTop: -500},
      to: { color: '#3214DA', fontSize: 36, marginTop:0 },
    })

    const morestyle = useSpring({
      from: { color: 'white', fontSize: 0},
      to: { color: 'black', fontSize: 24},
>>>>>>> a9f45157e1467da484b4e2e7d1328a1a73b29571:wellnessproject/client/src/components/NutritionStart/index.js
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