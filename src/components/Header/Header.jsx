"use client";

import "./Header.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuLinks = [
  { href: "/", label: "Главная" },
  { href: "/projects", label: "Проекты" },
  { href: "/technologies", label: "Технологии" },
  { href: "/dlya-veteranov-svo", label: "Для ветеранов СВО" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header({ onOpenModal }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsFixed(currentScrollTop <= 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  const handleMenuLinkClick = () => {
    closeMenu();
  };

  const handleOpenModal = () => {
    closeMenu();
    onOpenModal?.();
  };

  return (
    <>
      <header
        className={`
      ${isFixed ? "fixed" : "absolute"} 
      ${isMainPage ? "main-page" : "not-main-page"}
    `.trim()}
      >
        <Link href="/" className="logo-container">
          <Image src="/logo.jpg" alt="Дом42" width={500} height={500} />
        </Link>

        <div className="menu">
          {menuLinks.map((item) => {
            // Проверяем, является ли ссылка активной
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "active-link" : ""}
                onClick={handleMenuLinkClick}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          id="btn-menu"
          className="btn-menu"
          type="button"
          aria-label="Открыть меню"
          onClick={openMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </header>

      <Offcanvas
        show={showMenu}
        onHide={closeMenu}
        placement="end"
        backdrop={false}
        scroll={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className="menu">
            <div className="logo-container">
              <img src="/Logo2.svg" alt="Dom42" />
            </div>

            {menuLinks.map((item) => {
              // Проверяем, является ли ссылка активной
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "active-link" : ""}
                  onClick={handleMenuLinkClick}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="footer-contacts">
              <div className="contacts-container">
                <div className="tel">
                  <a href="tel:+7 923 523 83 30">+7 923 523 83 30</a>
                </div>
              </div>

              <a href="mailto:dom.region42@gmail.com">dom.region42@gmail.com</a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
