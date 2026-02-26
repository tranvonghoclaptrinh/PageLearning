        function toggleDarkMode() {
            const html = document.documentElement;
            const darkIcon = document.getElementById('darkIcon');
            
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                darkIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                darkIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        }

        window.onload = () => {
            const savedTheme = localStorage.getItem('theme');
            const darkIcon = document.getElementById('darkIcon');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                darkIcon.classList.replace('fa-moon', 'fa-sun');
            }
        }
            tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            light: '#3b82f6',
                            dark: '#1e3a8a',
                            bgDark: '#0f172a'
                        }
                    }
                }
            }
        }