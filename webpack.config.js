const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/index.js',
    },

    output: {
        path: path.join(__dirname, "app"),
        publicPath: './',
        filename: 'app.js'
    },

    devServer: {
        contentBase: path.join(__dirname, "app"),
        port: 9091,
        writeToDisk: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                  use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: "/",
                      },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },       

            {
                test: /\.(svg|eot|woff|woff2|ttf|otf)$/,
                exclude: /images/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "assets/fonts",
                    }
                  }
                ]
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                exclude: /fonts/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "assets/images",
                    }
                  }
                ]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },

        ]
    },

    

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new OptimizeCSSAssetsPlugin({}),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/styles.css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),

        new HtmlWebpackPlugin({
          filename: "about.html",
          template: "./src/about.html"
      }),

      new HtmlWebpackPlugin({
        filename: "how-it-works.html",
        template: "./src/how-it-works.html"
      }),

      new HtmlWebpackPlugin({
        filename: "list-teachers.html",
        template: "./src/list-teachers.html"
      }),

      new HtmlWebpackPlugin({
        filename: "page-teacher.html",
        template: "./src/page-teacher.html"
      }),

      new HtmlWebpackPlugin({
        filename: "promotions.html",
        template: "./src/promotions.html"
      }),

      new HtmlWebpackPlugin({
        filename: "teachers_reservation_page.html",
        template: "./src/teachers_reservation_page.html"
      }),

      new HtmlWebpackPlugin({
        filename: "one_promotions_page.html",
        template: "./src/one_promotions_page.html"
      }),

      new HtmlWebpackPlugin({
        filename: "promotions_select_teacher.html",
        template: "./src/promotions_select_teacher.html"
      }),

      new HtmlWebpackPlugin({
        filename: "promotion_reservation.html",
        template: "./src/promotion_reservation.html"
      }),

      new HtmlWebpackPlugin({
        filename: "teacher_time_booking.html",
        template: "./src/teacher_time_booking.html"
      }),

      // More_pages
      new HtmlWebpackPlugin({
        filename: "teacher_sign_up.html",
        template: "./src/teacher_sign_up.html"
      }),

      new HtmlWebpackPlugin({
        filename: "student_sign_up.html",
        template: "./src/student_sign_up.html"
      }),

      new HtmlWebpackPlugin({
        filename: "sign_in.html",
        template: "./src/sign_in.html"
      }),

      new HtmlWebpackPlugin({
        filename: "ask_for_teacher.html",
        template: "./src/ask_for_teacher.html"
      }),

      new HtmlWebpackPlugin({
        filename: "teacher_time_booking_normal.html",
        template: "./src/teacher_time_booking_normal.html"
      }),

      new HtmlWebpackPlugin({
        filename: "teacher_availability_time.html",
        template: "./src/teacher_availability_time.html"
      }),

      new HtmlWebpackPlugin({
        filename: "student_profile.html",
        template: "./src/student_profile.html"
      }),

      new HtmlWebpackPlugin({
        filename: "teacher_profile.html",
        template: "./src/teacher_profile.html"
      }),


      // End More Pages

      new HtmlWebpackPlugin({
        filename: "contact.html",
        template: "./src/contact.html"
      })
      
    ]
  } 