<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold text-gray-800">Students Data</h1>
      <button
        @click="addStudent"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Add Student
      </button>
    </div>

    <div class="mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search Student"
        class="w-full md:w-1/3 p-2 border rounded-md"
      />
    </div>

    <div class="overflow-x-auto bg-white shadow-md rounded-lg">
      <table class="min-w-full text-left text-gray-700">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-3 px-4">Profile</th>
            <th class="py-3 px-4">Sec.</th>
            <th class="py-3 px-4">Parents</th>
            <th class="py-3 px-4">D.O.B</th>
            <th class="py-3 px-4">Phone</th>
            <th class="py-3 px-4">Email</th>
            <th class="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="student in filteredStudents"
            :key="student.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="py-3 px-4 flex items-center space-x-3">
              <img
                :src="student.avatar"
                alt="avatar"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <div class="font-semibold">{{ student.name }}</div>
                <div class="text-sm text-gray-500">Class: {{ student.class }}</div>
              </div>
            </td>
            <td class="py-3 px-4">{{ student.section }}</td>
            <td class="py-3 px-4">{{ student.parent }}</td>
            <td class="py-3 px-4">{{ student.dob }}</td>
            <td class="py-3 px-4">{{ student.phone }}</td>
            <td class="py-3 px-4">{{ student.email }}</td>
            <td class="py-3 px-4 text-center space-x-3">
              <button class="text-blue-600 hover:text-blue-800">
                <i class="fas fa-eye"></i>
              </button>
              <button class="text-green-600 hover:text-green-800">
                <i class="fas fa-pen"></i>
              </button>
              <button
                @click="deleteStudent(student.id)"
                class="text-red-600 hover:text-red-800"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const students = ref([
  {
    id: 1,
    name: 'Garima Singh',
    class: 5,
    section: 'B',
    parent: 'Ronaldo Singh',
    dob: '20/10/2007',
    phone: '+123 9988568',
    email: 'r93@gmail.com',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Garima'
  },
  {
    id: 2,
    name: 'Haruto Yuto',
    class: 12,
    section: 'B',
    parent: 'Joshi David',
    dob: '12/12/2001',
    phone: '+123 9988568',
    email: 'd93@gmail.com',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Haruto'
  },
  {
    id: 3,
    name: 'Hayato Haruki',
    class: 5,
    section: 'C',
    parent: 'Jack Sparrow',
    dob: '26/10/2006',
    phone: '+123 9988568',
    email: 'd93@gmail.com',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Hayato'
  },
  {
    id: 4,
    name: 'John Deo',
    class: 12,
    section: 'C',
    parent: 'John Deo',
    dob: '02/10/2001',
    phone: '+123 9988568',
    email: 'p93@gmail.com',
    avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=John'
  }
])

const filteredStudents = computed(() =>
  students.value.filter((s) =>
    s.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

function addStudent() {
  alert('Add student clicked!')
}

function deleteStudent(id) {
  students.value = students.value.filter((s) => s.id !== id)
}
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
}
th:first-child {
  border-top-left-radius: 0.5rem;
}
th:last-child {
  border-top-right-radius: 0.5rem;
}
</style>