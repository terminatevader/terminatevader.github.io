var one = localStorage.getItem('one') || '';
    if (one != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('one','yes');
      localStorage.removeItem("thirtyone");
    }