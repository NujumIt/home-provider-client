import React from "react";
import styles from "../../styles/lookingTo/LookingTo.module.css";

const LookingTo = () => {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h4>تبحث عن</h4>
        <p>
          <span>بيع</span> <h4>أو</h4> <span>إيجار</span>
        </p>
        <h4>عقارك</h4>

        {/* positionally absolute button */}
        <button>أرسل الآن</button>
      </div>
    </div>
  );
};

export default LookingTo;
