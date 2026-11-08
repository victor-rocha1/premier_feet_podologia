/**
 * Premier Feet Podologia — Script Principal (Vanilla JavaScript)
 * Gerencia menu responsivo, cabeçalho fixo, rolagem suave, acordeão de dúvidas e animações de entrada.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderAndMobileMenu();
  initSmoothScrollAndActiveLinks();
  initFaqAccordion();
  initScrollReveal();
});

/**
 * 1. Cabeçalho fixo e Menu Lateral Responsivo (Mobile)
 */
function initHeaderAndMobileMenu() {
  const header = document.querySelector('.site-header');
  const menuBtn = document.getElementById('menu-toggle-btn');
  const closeBtn = document.getElementById('sidebar-close-btn');
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('menu-overlay');
  const sidebarLinks = sidebar ? sidebar.querySelectorAll('a') : [];

  // Sombra sutil no cabeçalho ao rolar a página
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 16) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (!menuBtn || !sidebar || !overlay) return;

  const setMenuState = (isOpen) => {
    menuBtn.classList.toggle('open', isOpen);
    sidebar.classList.toggle('open', isOpen);
    overlay.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);

    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
    );
    sidebar.setAttribute('aria-hidden', String(!isOpen));
  };

  menuBtn.addEventListener('click', () => {
    const isCurrentlyOpen = sidebar.classList.contains('open');
    setMenuState(!isCurrentlyOpen);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => setMenuState(false));
  }

  overlay.addEventListener('click', () => setMenuState(false));

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  // Fecha o menu ao pressionar a tecla Escape
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('open')) {
      setMenuState(false);
      menuBtn.focus();
    }
  });
}

/**
 * 2. Rolagem suave para âncoras internas e destaque do link ativo no menu
 */
function initSmoothScrollAndActiveLinks() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  internalLinks.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 8;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  });

  // Atualiza link ativo conforme a seção visível
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length || !navLinks.length) return;

  const updateActiveLink = () => {
    const scrollPos = window.scrollY + 160;
    let currentSectionId = '';

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${currentSectionId}`);
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

/**
 * 3. Acordeão interativo para a seção de Dúvidas Frequentes (#duvidas)
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  const setFaqItemState = (item, isOpen) => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;

    item.classList.toggle('active', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));

    if (isOpen) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    } else {
      answer.style.maxHeight = '0px';
    }
  };

  faqItems.forEach((item, index) => {
    const button = item.querySelector('.faq-question');
    if (!button) return;

    // Abre o primeiro item por padrão
    if (index === 0) {
      setFaqItemState(item, true);
    }

    button.addEventListener('click', () => {
      const isCurrentlyOpen = item.classList.contains('active');

      // Fecha os demais itens para manter a leitura limpa
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          setFaqItemState(otherItem, false);
        }
      });

      setFaqItemState(item, !isCurrentlyOpen);
    });
  });

  // Recalcula a altura do item aberto ao redimensionar a janela
  window.addEventListener('resize', () => {
    const activeItem = document.querySelector('.faq-item.active');
    if (activeItem) {
      const answer = activeItem.querySelector('.faq-answer');
      if (answer) {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    }
  });
}

/**
 * 4. Animações discretas de entrada durante a rolagem (Scroll Reveal)
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -48px 0px',
      threshold: 0.12,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
