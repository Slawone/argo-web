import { useState } from "react";

const steps = [
  {
    icon: "🔍",
    label: "Исследование",
    tiIcon: "ti-search",
    title: "Исследование",
    text: "Глубокое погружение в задачу: анализ аудитории, конкурентов и контекста. Формируем гипотезы и определяем ключевые метрики успеха для дальнейшей работы.",
  },
  {
    icon: "🎨",
    label: "Дизайн",
    tiIcon: "ti-palette",
    title: "Дизайн",
    text: "Создание визуального языка продукта: цвет, типографика, компоненты. Итеративное прототипирование с фокусом на пользовательский опыт и доступность.",
  },
  {
    icon: "⚙️",
    label: "Разработка",
    tiIcon: "ti-code",
    title: "Разработка",
    text: "Превращение дизайн-решений в рабочий код. Чистая архитектура, производительность и надёжность — три кита, на которых строится качественный продукт.",
  },
];

export default function TimelineSection() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const handleSelect = (index) => {
    if (index === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 150);
  };

  return (
    <section style={styles.section}>
      {/* Left: image panel */}
      <div style={styles.imgPanel}>
        <div
          style={{
            ...styles.imgWrap,
            opacity: fading ? 0 : 1,
            transform: fading ? "scale(0.97)" : "scale(1)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          <div style={styles.imgPlaceholder}>
            <span style={styles.imgIcon}>{steps[active].icon}</span>
            <span style={styles.imgLabel}>{steps[active].label}</span>
          </div>
        </div>
      </div>

      {/* Center: timeline */}
      <div style={styles.timeline}>
        <div style={styles.tlLine} />
        <div style={styles.tlItems}>
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              aria-label={step.title}
              title={step.title}
              style={{
                ...styles.tlBtn,
                ...(active === i ? styles.tlBtnActive : {}),
              }}
            >
              <i
                className={`ti ${step.tiIcon}`}
                aria-hidden="true"
                style={{
                  fontSize: 20,
                  color: active === i ? "#185FA5" : "#888780",
                  transition: "color 0.2s",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right: text blocks */}
      <div style={styles.textPanel}>
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              ...styles.textBlock,
              ...(active === i ? styles.textBlockActive : {}),
            }}
          >
            <h3
              style={{
                ...styles.textTitle,
                color: active === i ? "#185FA5" : "#5F5E5A",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                ...styles.textBody,
                color: active === i ? "#185FA5" : "#888780",
              }}
            >
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 80px 1fr",
    minHeight: 480,
    fontFamily: "sans-serif",
  },
  imgPanel: {
    padding: "1.5rem 1.5rem 1.5rem 0",
  },
  imgWrap: {
    width: "100%",
    height: 340,
    borderRadius: 12,
    overflow: "hidden",
    border: "0.5px solid #D3D1C7",
    background: "#F1EFE8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgPlaceholder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    width: "100%",
    height: "100%",
  },
  imgIcon: {
    fontSize: 64,
  },
  imgLabel: {
    fontSize: 13,
    color: "#888780",
    fontWeight: 500,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5rem 0",
    position: "relative",
  },
  tlLine: {
    position: "absolute",
    top: "2.5rem",
    bottom: "2.5rem",
    width: 1,
    background: "#B4B2A9",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0,
  },
  tlItems: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    position: "relative",
    zIndex: 1,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  tlBtn: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "#ffffff",
    border: "0.5px solid #B4B2A9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    margin: "18px 0",
    flexShrink: 0,
  },
  tlBtnActive: {
    background: "#E6F1FB",
    border: "2px solid transparent",
  },
  textPanel: {
    padding: "1.5rem 0 1.5rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  textBlock: {
    padding: "1rem 1.25rem",
    borderRadius: 12,
    border: "0.5px solid #D3D1C7",
    background: "#ffffff",
    transition: "all 0.25s ease",
  },
  textBlockActive: {
    border: "2px solid transparent",
    background: "#E6F1FB",
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 6,
    transition: "color 0.25s",
  },
  textBody: {
    fontSize: 13,
    lineHeight: 1.65,
    transition: "color 0.25s",
  },
};