import { ViewContainer } from "@/components/ViewContainer"
import { styles } from "@/components/pages/about/styles.css"
import { ViewLayout } from "@/layouts"
import Image from "next/image"

export const AboutPageComponent = () => {
  return (
    <ViewLayout title="ほしのなか政府について">
      <ViewContainer>
        <h1>ほしのなか政府について</h1>
        <h2>はじめに</h2>
        <p>
          ほしのなか政府は、記事を書く上で筆者の日々の生活を組織化した、架空の組織です。
          当サイトの名前として用いているものであり、既存のあらゆる団体・政府等を意味していません。
          当サイトは、ほしのなか政府広報局WWW広報委員会が管理しています。
        </p>
        <h2>サイトの趣旨</h2>
        <p>現時点で、サイトの趣旨は主に以下の2つです。</p>
        <h3>ポートフォリオサイト</h3>
        <p>
          当サイトは、プログラミング学習用のポートフォリオサイトとして立ち上げたものです。
          学習を行いながら、様々な機能の追加を行っていきたいと考えています。
          一方で、その過程で表示崩れや機能のバグ、アクセス不能になるエラー等が発生する可能性があるためご注意ください。
        </p>
        <h3>記事機能を用いた発信</h3>
        <p>
          当サイトには、マークダウンを利用して記述できる記事機能が追加されています。
          この機能を使って様々な情報発信を行いたいと考えています。
          記事機能も日々の開発で改良を加えていく予定です。
        </p>
        <h2>使用技術</h2>
        <p>
          フレームワークとして、
          <a href="https://rubyonrails.org/">Ruby on Rails 7</a>
          を用いて作成されました。 また、
          <a href="https://www.conoha.jp/conoha/">Conoha VPS</a>
          を利用してデプロイされています。
          <a href="https://github.com/Snak0201/fpb-wwwsite">GitHub</a>
          にてコード・バージョン管理が行われています。
          最新バージョン・リリースノートは
          <a href="https://github.com/Snak0201/fpb-wwwsite/releases">
            GitHub Releases
          </a>
          から確認できます。
        </p>
        <h2>ほしのなか政府のロゴ画像</h2>
        <p>ほしのなか政府のロゴ画像はこちらです。</p>
        <Image
          src="/images/logo.png"
          alt="ロゴ画像"
          width="600"
          height="210"
          className={styles.logo}
        />
      </ViewContainer>
    </ViewLayout>
  )
}
