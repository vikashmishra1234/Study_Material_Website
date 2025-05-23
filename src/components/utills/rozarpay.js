
export const createOrder = async (amt,quantumId,setLoading,setNavigate) => {
  try {
    // Send amount to backend to create an order
    setLoading(true)
    const response = await fetch('https://quantums-backend.onrender.com/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amt }), // Amount in paise
    });
    setLoading(false)
    const order = await response.json();

    // Configure Razorpay options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Replace with your Razorpay Key ID
      amount: order.amount, // Amount in paise (from backend)
      currency: order.currency, // INR
      name: 'Books.com',
      description: 'Live Transaction',
      order_id: order.id, // Razorpay Order ID from backend
      handler: async function (response) {
        // Verify payment on backend
        try {
          const verifyResponse = await fetch('https://quantums-backend.onrender.com/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const data = await verifyResponse.json();

          if (data.success) {
            localStorage.setItem(`quantum${quantumId}`,quantumId);
            alert('Payment verified successfully!');
            setNavigate(true)
          } else {
            alert('Payment verification failed!');
            
          }
        } catch (err) {
          console.error('Error verifying payment:', err);
         
        }
      },
      prefill: {
        name: 'Vikash Mishra',
        email: 'vikasmishra1369@gmail.com',
      },
      theme: {
        color: '#3399cc',
      },
    };

    // Open Razorpay Checkout
    const rzp =  new window.Razorpay(options);
    rzp.open()
    
  } catch (err) {
    setLoading(false)
    console.error('Error creating order:', err);
    return false
  }
};
