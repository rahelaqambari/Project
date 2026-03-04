function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex-center border-t">
      <div className="p-5">
        {currentYear} | ZARYAB Online Shopping
      </div>
    </footer>
  );
}

export default Footer;