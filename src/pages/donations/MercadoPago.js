import { Button } from '@chakra-ui/button';
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
  <Button
    ml={4}
    color="white"
    backgroundColor="#009EE3"
    variant="outline"
    _hover={{
      background: "#009EE3",
      color: "white",
    }}
    cursor="pointer"
    type="submit"
    id={FORM_ID}
  >
  </Button>
 );
}

export default Mercadopago;
