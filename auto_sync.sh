#!/bin/bash
# سكربت المزامنة المستمرة - المهندس أوسان عادل
DIRECTORY_TO_WATCH="./"

echo "المراقب الذكي يعمل الآن... أي تغيير سيتم رفعه لـ GitHub تلقائياً."

while inotifywait -r -e modify,create,delete,move "$DIRECTORY_TO_WATCH"; do
    git add .
    timestamp=$(date "+%Y-%m-%d %H:%M:%S")
    git commit -m "Auto-Update: $timestamp (Eng. Awsan Continuous Sync)"
    git push origin main
done
