from rest_framework import serializers

from .models import Category, Product

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)
    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "slug",
            "category_name",
            "category_slug",
            "get_absolute_url",
            "description",
            "price",
            "get_image",
            "get_thumbnail",
        )

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)

    class Meta:
        model = Category
        fields = (
            "id",
            "name",
            "slug",
            "get_absolute_url",
            "products",
        )