document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج بشكل افتراضي
  
    // الحصول على القيم المدخلة
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // التحقق من صحة المدخلات (مثال بسيط)
    if (username === "admin" && password === "12345") {
      document.getElementById('responseMessage').textContent = "تم تسجيل الدخول بنجاح!";
      document.getElementById('responseMessage').style.color = "green";
    } else {
      document.getElementById('responseMessage').textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
      document.getElementById('responseMessage').style.color = "red";
    }
  });
  