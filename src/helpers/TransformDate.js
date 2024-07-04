export default function TransformDate(date) {
    try {
        // نحاول إنشاء كائن تاريخ جديد باستخدام المدخل المعطى
        const selectedDate = new Date(date);

        // التحقق مما إذا كان selectedDate هو قيمة "غير رقمية" (NaN)
        // إذا كان selectedDate غير صالح (مثل سلسلة نصية غير قابلة للتحويل إلى تاريخ)، فإنه سيكون NaN
        if (isNaN(selectedDate)) {
            // إلقاء خطأ جديد برسالة 'Invalid date'
            // throw تُستخدم لإلقاء استثناء. يمكن لأي كود يتبع هذا السطر داخل الـ try block أن يُنفذ
            // بدلاً من ذلك، ينتقل التنفيذ إلى catch block لمعالجة الخطأ
            throw new Error('Invalid date');
        }
        
        // استخراج السنة من كائن التاريخ
        const getFullYear = selectedDate.getFullYear();
        // استخراج الشهر من كائن التاريخ (الأشهر تبدأ من 0، لذا نضيف 1)
        const getMonth = selectedDate.getMonth() + 1;
        // استخراج اليوم من كائن التاريخ
        const getDay = selectedDate.getDate();
        
        // طباعة اليوم والشهر والسنة في وحدة التحكم
        return(`${getFullYear}/${getMonth}/${getDay}`);
    } catch (err) {
        // في حالة حدوث خطأ، نقوم بطباعة رسالة الخطأ في وحدة التحكم
        console.error('Error processing date:', err);
    }
}
// const getMonth = (selectedDate.getMonth() + 1).toString().padStart(2,"0");
// // استخراج اليوم من كائن التاريخ
// const getDay = selectedDate.getDate().toString().padStart(2,"0");
// ليش حطها مدي بس هو حطها حلقه 245