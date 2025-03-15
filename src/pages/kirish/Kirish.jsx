import React, { useState } from "react";
import "./Kirish.css";
import { Link } from "react-router-dom";

const Kirish = () => {
  const [phone, setPhone] = useState("+998 ");

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 12) value = value.slice(0, 12);

    const formattedPhone = `+998 ${value.slice(3, 5)} ${value.slice(
      5,
      8
    )} ${value.slice(8, 10)} ${value.slice(10, 12)}`.trim();
    setPhone(formattedPhone);
  };

  return (
    <div className="login-wrapper">
      <h3 className="login-title">Telefon raqamini kiriting</h3>
      <p className="login-message">Tasdiqlash kodini SMS orqali yuboramiz</p>
      <input
        type="text"
        value={phone}
        onChange={handleChange}
        maxLength="17"
        placeholder="+998 00 000 00 00"
      />
      <button className="login-send">Kodni olish</button>
      <p className="login-text">
        Avtotizatsiyadan o'tish orqali siz{" "}
        
      </p>

      <Link className="login-asosiysahifa" to={"/"}>
        Asosiy sahifaga qaytish
      </Link>
    </div>
  );
};

export default Kirish;
