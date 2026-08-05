/** Chạy thủ công: sendTodaySeoPlanEmail — gửi kế hoạch hôm nay qua Gmail */
function sendTodaySeoPlanEmail() {
  const email = "phamductubk@gmail.com";
  const today = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "yyyy-MM-dd");
  const plan = getSeoPlanForDate_(today);
  const subject = "[Saigon Living] Kế hoạch " + formatDateVn_(today) + " — " + plan.title;
  const body = formatSeoPlanBody_(plan);

  GmailApp.sendEmail(email, subject, body, {
    name: "Saigon Living Plan",
    htmlBody: "<pre style=\"font-family:Arial,sans-serif;white-space:pre-wrap\">" + body + "</pre>",
  });

  return "Sent to " + email;
}

function getSeoPlanForDate_(isoDate) {
  const plans = {
    "2026-08-05": {
      title: "T4 — CRM + Zalo + Sheet (3 trụ)",
      hours: "~2h",
      tasks: [
        "Zalo: tên Tú · trạng thái Eco · GS Nhà Bè · Vinhomes Bình Chánh — 0931781111",
        "2 album Zalo: Eco · GS Nhà Bè",
        "Form thank-you + test lead + bật email notify điện thoại",
        "Sheet CRM: tab Lead + Tin giỏ · 3 cột Eco · GSNhaBe · VinhomesBC",
      ],
    },
  };

  if (plans[isoDate]) {
    return { date: isoDate, title: plans[isoDate].title, hours: plans[isoDate].hours, tasks: plans[isoDate].tasks };
  }

  return {
    date: isoDate,
    title: "Ritual hàng ngày",
    hours: "~1–2h",
    tasks: [
      "Gọi lead <30 phút nếu có form",
      "Eco 50%: giỏ / đào chủ / FB",
      "GS 30%: pipeline CN Nhà Bè",
      "Vinhomes 20%: blog / form theo dõi sớm",
    ],
  };
}

function formatSeoPlanBody_(plan) {
  const lines = [
    "Saigon Living — kế hoạch ngày " + formatDateVn_(plan.date),
    "Chiến lược: Eco 50% · GS Nhà Bè 30% · Vinhomes BC 20%",
    "",
    plan.title + " (" + plan.hours + ")",
    "",
  ];
  plan.tasks.forEach(function (task, idx) {
    lines.push((idx + 1) + ". [ ] " + task);
  });
  lines.push("");
  lines.push("Zalo 0931781111 · Gọi lead <30p trước khi nhắn");
  return lines.join("\n");
}

function formatDateVn_(isoDate) {
  const parts = isoDate.split("-");
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}
