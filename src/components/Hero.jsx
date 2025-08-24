.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* ✅ Mobile: stack vertically */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero img {
    max-width: 80%;
  }
}
