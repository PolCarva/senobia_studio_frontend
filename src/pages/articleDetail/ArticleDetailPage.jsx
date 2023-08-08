import React, { useState } from "react";
import { generateHTML } from "@tiptap/react";
import parse from "html-react-parser";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Italic from "@tiptap/extension-italic";

import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Link, useParams } from "react-router-dom";
import { images, stable } from "../../constants";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../services/index/posts";
import ArticleDetailSkeleton from "./components/ArticleDetailSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import { useSelector } from "react-redux";

const postsData = [
  {
    _id: 1,
    img: images.Post1,
    title: "Help children get better education",
    createdAt: "2023-08-01T12:00:00.000Z",
  },
  {
    _id: 2,
    img: images.Post1,
    title: "Help children get better education",
    createdAt: "2023-08-01T12:00:00.000Z",
  },
  {
    _id: 3,
    img: images.Post1,
    title: "Help children get better education",
    createdAt: "2023-08-01T12:00:00.000Z",
  },
  {
    _id: 4,
    img: images.Post1,
    title: "Help children get better education",
    createdAt: "2023-08-01T12:00:00.000Z",
  },
];

const tagsData = [
  "Medical",
  "Education",
  "Food",
  "Lifestyle",
  "Healthy",
  "Diet",
  "Learning",
];

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);

  const [breadCrumbsData, setBreadCrumbsData] = useState([]);

  const [body, setBody] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getSinglePost({ slug }),
    onSuccess: (data) => {
      setBreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "Blog", link: "/blog" },
        { name: `${data.title}`, link: `/blog/${data.slug}` },
      ]);
      setBody(
        parse(
          generateHTML(data?.body, [Bold, Italic, Document, Paragraph, Text])
        )
      );
    },
  });

  return (
    <MainLayout>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message={"Oops! Something went wrong"} />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />
            <img
              className="rounded-xl w-full aspect-video object-cover object-center"
              src={
                data?.photo
                  ? stable.UPLOAD_FOLDER_BASE_URL + data.photo
                  : images.samplePostImage
              }
              alt={data?.title}
            />
            <div className="mt-4 flex gap-2">
              {data?.categories.map((category) => (
                <Link
                  to={`/blog?category=${category.name}`}
                  className="text-primary text-sm font-roboto inline-block uppercase md:text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              {data?.title}
            </h1>
            <div className="mt-4 prose prose-sm sm:prose-base">{body}</div>

            <CommentsContainer
              className="mt-10"
              loggedInUserId={userState?.userInfo?._id}
              comments={data?.comments}
            />
          </article>
          <div>
            <SuggestedPosts
              header={"Latest Article"}
              posts={postsData}
              tags={tagsData}
              className="mt-8 lg:mt-0 lg:max-w-xs"
            />
            <div className="mt-7">
              <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                Share on:
              </h2>
              <SocialShareButtons
                url={encodeURI("pablo-carvalho.app.web")}
                title={encodeURIComponent("Pablo Carvalho Portfolio Web")}
              />
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
};

export default ArticleDetailPage;
