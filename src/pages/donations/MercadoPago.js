import React, { useEffect } from 'react';

const Mercadopago = () => {

 const FORM_ID = "payment-button";

 const preferenceId="1003539968-8ccba64d-116c-44b9-8aed-59aee3cd9f79";
   useEffect(() => {
    if (preferenceId) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttribute('data-preference-id', preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
      
    }
  }, [preferenceId]);
  

 return (
  <div>
   
  </div>
 );
}

export default Mercadopago;
