import Link from "next/link";
import "./page.scss";
import ProductGallery from "@/components/Product/ProductGallery/ProductGallery";
import ProductInfo from "@/components/Product/ProductInfo/ProductInfo";
import projects from "@/app/projects/data/projects.json";
import Contacts from "@/components/Home/Contacts/Contacts";

function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

// ================= META =================
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Проект не найден",
      description: "Такого проекта не существует",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${project.name} — проект дома`,
    description: project.description?.slice(0, 160),
    openGraph: {
      title: project.name,
      description: project.description,
      images: project.images?.map((img) => ({
        url: img,
        width: 1200,
        height: 630,
      })),
    },
  };
}

// ================= PAGE =================
export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="container">
        <div className="error">
          <h2>Проект не найден</h2>
          <Link href="/projects">Вернуться к проектам</Link>
        </div>
      </div>
    );
  }

  // 👇 адаптация под твои компоненты
  const adaptedProduct = {
    final_name: project.name,
    description: project.description,
    shortDescription: project.shortDescription,
    price: project.price,
    characteristics: project.characteristics,
  };

  const sortedImagePaths = project.images || [];

  return (
    <>
      <div className="product-page">
        <div className="product-page__left">
          <ProductGallery
            images={sortedImagePaths}
            productName={project.name}
          />
        </div>

        <div className="product-page__right">
          <ProductInfo product={adaptedProduct} />
        </div>
      </div>

      <Contacts />
    </>
  );
}
