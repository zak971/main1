declare module '@emailjs/browser' {
  const emailjs: {
    init: (publicKey: string) => void;
    send: (
      serviceID: string,
      templateID: string,
      templateParams: {
        from_name: string;
        from_email: string;
        message: string;
        to_name: string;
      }
    ) => Promise<{ text: string }>;
  };
  export default emailjs;
} 