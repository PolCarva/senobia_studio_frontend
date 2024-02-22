import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define las traducciones
const resources = {
    es: {
        translation: {
            alerts: {
                underConstruction: 'Sitio bajo construcción, algunas características aún no funcionan'
            },
            navBar: {
                home: 'Inicio',
                articles: 'Artículos',
                pages: {
                    main: 'Páginas',
                    about: 'Sobre nosotros',
                    contact: 'Contáctanos',
                },
                pricing: 'Precios',
                faq: 'FAQ',
                account: {
                    main: 'Cuenta',
                    admin: 'Administración',
                    login: 'Iniciar sesión',
                    logout: 'Cerrar sesión',
                    register: 'Registrarse',
                    profile: 'Perfil',
                },
            },
            hero: {
                welcomeMessage: 'Inspira y colabora con los estudiantes de Diseño Multimedia de ORT en nuestra red social. ¡Únase hoy para crear juntos el diseño del mañana!',
                searchPlaceholder: 'Buscar artículos',
                searchBtn: 'Buscar',
                searchSuggestions: 'Etiquetas populares',
                altHeroImg: 'Imagen de bienvenida',
            },
            profile: {
                deletePicture: "Eliminar",
                name: "Nombre",
                email: "Email",
                newPassword: "Nueva contraseña (opcional)",
                update: "Actualizar",
                placeholders: {
                    name: "Ingrese su nombre",
                    email: "Ingrese su email",
                    password: "Ingrese nueva contraseña",
                },
                errors: {
                    name: {
                        required: "El nombre es requerido",
                        length: "El nombre debe tener al menos 1 caracter",
                    },
                    email: {
                        required: "El email es requerido",
                        pattern: "Ingrese un email válido",
                    },
                    password: {
                        required: "La contraseña es requerida",
                        length: "La contraseña debe tener al menos 6 caracteres",
                    },
                }
            },
            articles: {
                moreArticles: "Más artículos",
            },
            cta: {
                title: "Recibe nuestras historias a tu Email semanalmente.",
                inputPlaceholder: "Tu Email",
                button: "Empezar",
                response: "Recibe una respuesta mañana si envías antes de las 9pm hoy. Si recibimos después de las 9pm, recibiremos una respuesta al día siguiente.",
                future: "El futuro del trabajo",
                futureDescription: "La mayoría de las personas trabajarán en empleos que hoy no existen."

            },
            footer: {
                shortDescription: "Inspira y colabora con los estudiantes de Diseño Multimedia de ORT en nuestra red social.",
                product: {
                    title: "Producto",
                    landingPage: "Página de inicio",
                    features: "Características",
                    documentation: "Documentación",
                    referalProgram: "Programa de referidos",
                    pricing: "Precios",
                },
                services: {
                    title: "Servicios",
                    documentation: "Documentación",
                    design: "Diseño",
                    themes: "Temas",
                    illustrations: "Ilustraciones",
                    uiKit: "UI Kit",
                },
                company: {
                    title: "Compañía",
                    about: "Acerca de",
                    terms: "Términos",
                    privacyPolicy: "Política de privacidad",
                    careers: "Carreras",
                },
                more: {
                    title: "Más",
                    documentation: "Documentación",
                    license: "Licencia",
                    changelog: "Changelog",
                },
            }
            // Agrega más traducciones aquí
        },
    },
    en: {
        translation: {
            alerts: {
                underConstruction: ' Site under construction, some features are not working yet'
            },
            navBar: {
                home: 'Home',
                articles: 'Articles',
                pages: {
                    main: 'Pages',
                    about: 'About us',
                    contact: 'Contact us',
                },
                pricing: 'Prices',
                faq: 'FAQ',
                account: {
                    main: 'Account',
                    admin: 'Admin dashboard',
                    signin: 'Sign In',
                    logout: 'Logout',
                    register: 'Register',
                    profile: 'Profile Page',
                },
            },
            hero: {
                welcomeMessage: "Inspire and collaborate with ORT Multimedia Design students on our social network. Join today to create tomorrow's design together!",
                searchPlaceholder: "Search articles",
                searchBtn: "Search",
                searchSuggestions: "Popular tags",
                altHeroImg: "Welcome image",
            },
            profile: {
                deletePicture: "Delete",
                name: "Name",
                email: "Email",
                newPassword: "New password (optional)",
                update: "Update",
                placeholders: {
                    name: "Enter name",
                    email: "Enter email",
                    password: "Enter new password",
                },
                errors: {
                    name: {
                        required: "Name is required",
                        length: "Name must be at least 1 character long",
                    },
                    email: {
                        required: "Email is required",
                        pattern: "Enter a valid email address",
                    },
                    password: {
                        required: "Password is required",
                        length: "Password must be at least 6 characters long",
                    },
                }
            },
            articles: {
                moreArticles: "More articles",
            },
            cta: {
                title: "Get our stories delivered From us to your inbox weekly.",
                inputPlaceholder: "Your Email",
                button: "Get started",
                response: "Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.",
                future: "Future of Work",
                futureDescription: "Majority of peole will work in jobs that don’t exist today."
            },
            footer: {
                shortDescription: "Inspire and collaborate with ORT Multimedia Design students on our social network.",
                product: {
                    title: "Product",
                    landingPage: "Landing Page",
                    features: "Features",
                    documentation: "Documentation",
                    referalProgram: "Referal Program",
                    pricing: "Pricing",
                },
                services: {
                    title: "Services",
                    documentation: "Documentation",
                    design: "Design",
                    themes: "Themes",
                    illustrations: "Illustrations",
                    uiKit: "UI Kit",
                },
                company: {
                    title: "Company",
                    about: "About",
                    terms: "Terms",
                    privacyPolicy: "Privacy Policy",
                    careers: "Careers",
                },
                more: {
                    title: "More",
                    documentation: "Documentation",
                    license: "License",
                    changelog: "Changelog",
                },
            }
            // Agrega más traducciones aquí
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es', // idioma predeterminado
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;