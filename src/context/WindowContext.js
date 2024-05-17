import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
export const WindowSize=createContext("")
export default function WindowContext({children}) {
  const [Size,setSize]=useState(window.innerWidth)
  useEffect(()=>{
    function SetWendowWidth() {
      setSize(window.innerWidth)
    }
    window.addEventListener("resize",SetWendowWidth)
    //clenup function
    return ()=>{
      window.removeEventListener("resize",SetWendowWidth)
    }
  },[])
  return (
    < WindowSize.Provider value={{Size,setSize}} >{children}</WindowSize.Provider>
  )
}
// هاذي عشان نقدر نخفي السياد بار كامل في حجم الجوال فهاي الفنكشن تساعدني على هاذا الشي و اول شي متخدم كونتكست عادي عشان اقدر اتعمله في كل مكان ف عندي اول شي كونست فيها انر سايز هاذي تجيب لي حجم الشاشه و حطيتها في يوز استيت عشان ما تتكرر و عندي الفنكشن ذي تروج جق الست سايزو تحط فيه حجم الشاشه الجديد والايفنت ذا انه لو تغير حجم الشاشه شغل الفنكشن يلي راح تعبي الحجم الجديد لي الشاشه و  فيه يتيرن فنكشن ريموف اد ايفنت ليسنر وهذاانه اذا تغير الحجم يشيل ال اليفن عشان ما يصير تكرار و يشغل الفنكشن و هي مراح تشتغل تام ما تغير الجم بس في الاخير يحذف الفنشن عشان ما يتكرر و انت اقرا الكود و تفهم او الحلقه 143