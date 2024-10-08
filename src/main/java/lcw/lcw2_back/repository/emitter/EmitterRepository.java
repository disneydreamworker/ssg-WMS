package lcw.lcw2_back.repository.emitter;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Map;

public interface EmitterRepository {
    //Emitter 저장
    SseEmitter save(String emitterId,SseEmitter sseEmitter);
    //이벤트 저장
    void saveEventCache(String eventCacheId,Object event);
    //해당 유저의 모든 emitter,event
    SseEmitter findEmitterByUserId(String userId);
    Map<String,Object> findAllEventCacheByUserId(String userId);
    //emitter 제거
    void deleteById(String emitterId);
    void deleteAllEmitter();
    void deleteEventCacheByNotificationId(String notification_id);
    void deleteAllEventCacheByUserId(String userId);

    //eventCache update
    void updateEventCacheByNotificationId(String notification_id);
}
