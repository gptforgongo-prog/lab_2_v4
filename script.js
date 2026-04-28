document.addEventListener("DOMContentLoaded", () => {
    const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform || (navigator.userAgentData ?
            navigator.userAgentData.platform : "Невідомо"),
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height
    };

    const osBrowserInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform || (navigator.userAgentData ? navigator.userAgentData.platform : "Невідомо"),
        appVersion: navigator.appVersion,
        appName: navigator.appName,
        vendor: navigator.vendor,
        language: navigator.language,
        userAgentData: navigator.userAgentData ? navigator.userAgentData : "[object Object]",
        screen: window.screen ? "[object Object]" : undefined
    };

    localStorage.setItem("systemInfo", JSON.stringify(systemInfo));
    localStorage.setItem("osBrowserInfo", JSON.stringify(osBrowserInfo));
    const displayContainer = document.getElementById("local-storage-display");

    if (displayContainer) {
        let htmlContent = "<h2>Дані, збережені у localStorage:</h2><div class='ls-cards-container'>";

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            let value = localStorage.getItem(key);

            let contentHtml = "";
            try {
                const parsedValue = JSON.parse(value);
                if (typeof parsedValue === 'object' && parsedValue !== null) {
                    contentHtml = "<ul>";
                    for (const [prop, val] of Object.entries(parsedValue)) {
                        contentHtml += `<li><strong>${prop}:</strong> ${val}</li>`;
                    }
                    contentHtml += "</ul>";
                } else {
                    contentHtml = `<p>${parsedValue}</p>`;
                }
            } catch (error) {
                contentHtml = `<p>${value}</p>`;
            }

            htmlContent += `
                <div class="ls-card">
                    <h3>Ключ: ${key}</h3>
                    ${contentHtml}
                </div>
            `;
        }

        htmlContent += "</div>";
        displayContainer.innerHTML = htmlContent;
    }


    const fetchComments = async () => {
        const commentsContainer = document.getElementById("comments-container");

        if (!commentsContainer) return;
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/4/comments");

            if (!response.ok) {
                throw new Error("Помилка при завантаженні даних");
            }

            const comments = await response.json();
            commentsContainer.innerHTML = "";

            comments.forEach(comment => {
                const commentElement = document.createElement("div");
                commentElement.classList.add("comment-card");

                commentElement.innerHTML = `
                    <h3 class="comment-name" title="${comment.name}">${comment.name}</h3>
                    <a class="comment-email" href="mailto:${comment.email}" title="${comment.email}">${comment.email}</a>
                    <p class="comment-body">${comment.body}</p>
                `;

                commentsContainer.appendChild(commentElement);
            });

        } catch (error) {
            commentsContainer.innerHTML = `<p style="color: red;">Не вдалося завантажити відгуки: ${error.message}</p>`;
        }
    };
    fetchComments();

    const modal = document.getElementById("feedback-modal");
    const closeModalBtn = document.getElementById("close-modal");

    const showModal = () => {
        if (modal) {
            modal.style.display = "flex";
        }
    };
    setTimeout(showModal, 60000);

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;


    const setTheme = (isDark) => {
        if (isDark) {
            body.classList.add("dark-theme");
            themeToggleBtn.textContent = "Денна тема";
        } else {
            body.classList.remove("dark-theme");
            themeToggleBtn.textContent = "Нічна тема";
        }
    };


    const applyThemeBasedOnTime = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 7 && currentHour < 21) {
            setTheme(false);
        } else {
            setTheme(true);
        }
    };
    applyThemeBasedOnTime();

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isCurrentlyDark = body.classList.contains("dark-theme");
            setTheme(!isCurrentlyDark);
        });
    }
});

