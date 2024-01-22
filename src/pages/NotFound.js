import React from 'react'
import "./NotFound.css"
function NotFound() {
  return (
    <div className="NotFound">
      <img
        src="https://cdn3.iconfinder.com/data/icons/device-services-1/128/movie_film_video_slate_clapper_media_store_error_disconnect_fail-512.png"
        alt="Not Found error"
        width={"300px"}
      />
      <div>
        <p>The page you requested is not found.</p>
        <p>La página que solicitaste no se encuentra.</p>
        <p>La page que vous avez demandée est introuvable.</p>
        <p>Die angeforderte Seite wurde nicht gefunden.</p>
        <p>您请求的页面未找到。</p>
        <p>Запрашиваемая страница не найдена.</p>
        <p>お探しのページは見つかりませんでした。</p>
        <p>الصفحة التي طلبتها غير موجودة.</p>
      </div>
    </div>
  );
}

export default NotFound